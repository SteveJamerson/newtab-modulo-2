import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ListaDeUsuarios, {} from "./ListaDeUsuarios";

import axios from "axios";

const API = [
  {
    id: 1001,
    name: "Eduardo Santos",
    img: "https://randomuser.me/api/portraits/men/9.jpg",
    username: "@eduardo.santos",
  },
  {
    id: 1002,
    name: "Marina Coelho",
    img: "https://randomuser.me/api/portraits/women/37.jpg",
    username: "@marina.coelho",
  },
];

jest.mock("axios", () => ({
  get: jest.fn((..._) => {
    return new Promise((resolve) => {
      resolve(true);
    });
  }),
}));

describe("Lista de usuarios", () => {
  beforeEach(async () => {
    axios.get.mockResolvedValue({ data: API });
    render(<ListaDeUsuarios />);
    await screen.findByText('Buscar usuário');
  })

  it("should loading", () => {
    render(<ListaDeUsuarios />);
    const test = screen.getByTestId("loading");
    expect(test).toBeTruthy();
    expect(test).toMatchSnapshot();
  });

  it("should container", async () => { 
    const test = screen.getByTestId("container");
    expect(test).toBeTruthy();
    expect(test).toMatchSnapshot();
  });

  it("should filter", async () => {
    const filter = screen.getByTestId("filter")
    fireEvent.change(filter, { target: { value: '10' } })
  });

  it("should open and close modal payment", async () => {
    
    const open = screen.getByTestId("modal-pay-1")
    fireEvent.click(open)
    const close = screen.getByTestId("modal-pay-close")
    fireEvent.click(close)
  });
});
