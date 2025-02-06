from typing import List

from fastapi import FastAPI

from pydantic import BaseModel

import json

app = FastAPI()

class  Clima(BaseModel):
    city: str
    month: str
    avg_temp_max: float
    avg_temp_min: float
    precipitation_mm: float
    humidity_percent: float

with open("clima.json", "r") as file:
    DB = json.load(file)

@app.get("/api01")
def read_root():
    return DB