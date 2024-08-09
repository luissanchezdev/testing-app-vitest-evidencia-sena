import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('añade una nueva tarea', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Añadir nueva tarea');
    const button = screen.getByText('Añadir');
    
    fireEvent.change(input, { target: { value: 'Nueva tarea' } });
    fireEvent.click(button);
    
    expect(screen.getByText('Nueva tarea')).toBeDefined();
  });

  it('marca una tarea como completada', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Añadir nueva tarea');
    const button = screen.getByText('Añadir');
    
    fireEvent.change(input, { target: { value: 'Tarea para completar' } });
    fireEvent.click(button);
    
    const todoText = screen.getByText('Tarea para completar');
    fireEvent.click(todoText);
    
    expect(todoText.style.textDecoration).toBe('line-through');
  });

  it('elimina una tarea', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Añadir nueva tarea');
    const addButton = screen.getByText('Añadir');
    
    fireEvent.change(input, { target: { value: 'Tarea para eliminar' } });
    fireEvent.click(addButton);
    
    const deleteButton = screen.getByText('Eliminar');
    fireEvent.click(deleteButton);
    
    expect(screen.queryByText('Tarea para eliminar')).toBeNull();
  });
});