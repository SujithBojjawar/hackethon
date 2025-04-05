from sentence_transformers import SentenceTransformer
import numpy as np
import faiss

model = SentenceTransformer('all-MiniLM-L6-v2')

jobs = [
    {"title": "Data Scientist", "description": "Analyze data using machine learning models", "skills": "Python, Machine Learning, SQL"},
    {"title": "Web Developer", "description": "Build web applications using React and Node.js", "skills": "JavaScript, React, Node.js"},
    {"title": "AI Engineer", "description": "Develop AI models for NLP tasks", "skills": "Python, NLP, Deep Learning"},
    {"title": "Backend Developer", "description": "Develop and optimize backend APIs", "skills": "Java, Spring Boot, MySQL"},
    {"title": "Cybersecurity Analyst", "description": "Monitor and secure network infrastructure", "skills": "Cybersecurity, Network Security, Ethical Hacking"},
    {"title": "Mobile App Developer", "description": "Develop Android and iOS applications", "skills": "Flutter, Dart, Firebase"},
    {"title": "Data Analyst", "description": "Analyze and interpret complex datasets", "skills": "Excel, SQL, Tableau"},
    {"title": "Cloud Engineer", "description": "Manage cloud-based infrastructure and services", "skills": "AWS, Kubernetes, Docker"},
]

job_descriptions = [job["description"] for job in jobs]
job_vectors = model.encode(job_descriptions)

dimension = job_vectors.shape[1]
index = faiss.IndexFlatL2(dimension)
index.add(np.array(job_vectors))

def find_best_job(candidate_skills):
    candidate_vector = model.encode([candidate_skills])
    distances, indices = index.search(candidate_vector, 1)
    best_match_index = indices[0][0]
    return jobs[best_match_index]["title"], jobs[best_match_index]["description"]

candidate_skills = "I know Python, NLP, and Deep Learning"
best_job, job_desc = find_best_job(candidate_skills)

print(f"Best Job Match: {best_job}")
print(f"Job Description: {job_desc}")
