import { taskArr } from "../src/task3";
import { describe, it, expect } from "vitest";

describe("Task 3" ,() => {
  const arr = taskArr();
  
  it("Debería tener el numero 8 en el indice 7 y un tamaño de 12", 
    () =>{
      expect(arr.indexOf(8)).toBe(7);
      expect(arr.length).toBe(12);
    } 
  )
})

// src/task3.js

export const taskArr = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12];

  arr.splice(7, 0, 8);

  return { arr };
};
