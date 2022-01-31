import React from "react";
import { render, screen } from "@testing-library/react";
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

const _body = { data: API };
let url = "";
let body = [];

jest.mock("axios", () => ({
  get: jest.fn((_url, _body) => {
    return new Promise((resolve) => {
      url = _url;
      body = _body;
      resolve(_body);
    });
  }),
}));

describe("Lista de usuarios", () => {

  it("should loading", () => {
    render(<ListaDeUsuarios />);
    const loading = screen.getByTestId("loading");
    expect(loading).toBeTruthy();
    expect(loading).toMatchSnapshot();
  });

  it("test container", async () => { 
    render(<ListaDeUsuarios />);
    axios.get.mockResolvedValue({ _body });
    await screen.findByText('Buscar usuário');
    const container = screen.getByTestId("container");
    expect(container).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
