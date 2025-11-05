FROM python:3.12-slim-trixie

WORKDIR /ai_predictive_model/

# Copy everything (so setup.py is inside /app)
COPY . /ai_predictive_model/

# Upgrade pip and install dependencies
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

EXPOSE 5000

CMD ["python3", "app.py"]