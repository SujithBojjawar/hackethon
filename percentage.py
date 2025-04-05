from sentence_transformers import SentenceTransformer, util

model = SentenceTransformer('all-MiniLM-L6-v2')


job_description = "Looking for a Python developer with experience in Flask and AI models."
candidate_skills = "I am skilled in Python, Flask, and AI development."

job_embedding = model.encode(job_description, convert_to_tensor=True)
skills_embedding = model.encode(candidate_skills, convert_to_tensor=True)


similarity_score = util.pytorch_cos_sim(job_embedding, skills_embedding).item()

print(f"Match Score: {round(similarity_score * 100, 2)}%")
