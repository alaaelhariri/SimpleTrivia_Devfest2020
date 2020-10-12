import { Injectable } from '@angular/core';
import { Identifiable } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CrudService<T extends Identifiable> {
  private id = 0;
  protected data: T[] = [];

  get(id: number): T {
    return this.data.find(d => d.id === id);
  }

  getAll(): T[] {
    return this.data;
  }

  create(model: T): void {
    model.id = this.id;
    this.id++;
    this.data.push(model);
  }

  createMany(models: T[]): void {
    // used existing create model to ensure id is incremented
    models.forEach(model => this.create(model));
  }

  update(model: T): void {
    const existingIndex = this.data.findIndex(d => d.id === model.id);
    if (existingIndex === -1) {
      console.error(`No existing model with id ${model.id} exists.`);
      return;
    }
    this.data[existingIndex] = model;
  }

  delete(id: number): void {
    const existingIndex = this.data.findIndex(d => d.id === id);
    if (existingIndex === -1) {
      console.error(`No existing model with id ${id} exists.`);
      return;
    }
    this.data.splice(existingIndex, 1);
  }
}
