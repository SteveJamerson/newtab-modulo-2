import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
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

afterAll(cleanup)

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
  });

  it("should container", async () => { 
    const test = screen.getByTestId("container");
    expect(test).toBeTruthy();
  });

  it("should filter", async () => {
    const filter = screen.getByTestId("filter")
    fireEvent.change(filter, { target: { value: '10' } })
    const cards = screen.getAllByTestId(/card-\d/g)
    expect(cards.length).toEqual(2)
  });

  it("should open and close modal payment", async () => {
    const open = screen.getByTestId("modal-pay-1")
    fireEvent.click(open)
    const close = screen.getByTestId("modal-pay-close")
    fireEvent.click(close)
  });

  describe('should payment', () => {
    beforeEach(async () => {
      const open = screen.getByTestId("modal-pay-1")
      fireEvent.click(open)
  
      const select = await screen.getByTestId("modal-pay-card")
      await fireEvent.click(select)

      const value = await screen.getByTestId('modal-pay-value')
      await fireEvent.change(value, { target: { value: '10000' } })
    })

    it("valid", async () => {
      const options = screen.getByTestId('modal-pay-card')
      await fireEvent.change(options, { target: { value: '1' } })
      expect(options.value).toEqual('1')
  
      const submit = screen.getByTestId("modal-pay-submit")
      fireEvent.click(submit)
  
      const receipt = screen.getByTestId("modal-receipt-close")
      fireEvent.click(receipt)

      const result = screen.getByTestId('payment')
      expect(result).toBeTruthy()
    });

    it("invalid", async () => {
      const options = screen.getByTestId('modal-pay-card')
      fireEvent.change(options, { target: { value: '2' } })
      expect(options.value).toEqual('2')
  
      const submit = screen.getByTestId("modal-pay-submit")
      fireEvent.click(submit)
  
      const receipt = screen.getByTestId("modal-receipt-close")
      fireEvent.click(receipt)

      const result = screen.getByTestId('payment não')
      expect(result).toBeTruthy()
    });
  })

});
