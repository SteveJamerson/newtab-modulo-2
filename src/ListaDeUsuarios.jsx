import React, { useEffect, useState } from "react";
import "./listadeusuarios.css";
import axios from "axios";

//Pegando as informações da API pelo GET
const ListaDeUsuarios = () => {
  const [_infos, _setInfos] = useState([]);
  const [infos, setInfos] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.mocky.io/v2/5d531c4f2e0000620081ddce", {
        method: "GET",
      })
      .then((resposta) => {
        setInfos(resposta.data);
        _setInfos(resposta.data);
      })
  }, []);

  // Mock com lista de cartõs para teste
  const cards = [
    // cartão válido
    {
      card_number: "1111111111111111",
      cvv: 789,
      expiry_date: "01/18",
    },
    // cartão inválido
    {
      card_number: "4111111111111234",
      cvv: 123,
      expiry_date: "01/20",
    },
  ];

  const filter = (event) => {
    const value = event.target.value;
    const _new = _infos.filter((i) => i.id.toString().includes(value));
    setInfos(_new);
  };

  // Função para pegar a escolha do cartão do input select
  const escolhaDoCartao = (event) => {
    setValorCartao(event.target.value);
  };

  // Ações dos modals
  const [abrirPagamento, setAbrirPagamento] = useState("none"); // Para abrir modal de pagamento
  const [pegarUsuario, setPegarUsuario] = useState(""); // Para pegar o nome do usuário
  const [abrirPagou, setAbrirPagou] = useState("none"); // Para abrir modal com recibo de pagamento
  const [abrirNaoRecebeu, setAbrirNaoRecebeu] = useState(""); // Para msg de erro de pagamento
  const [valorCartao, setValorCartao] = useState("1"); // Para pegar o cartão escolhido para pagamento
  const [valorDinheiro, setValorDinheiro] = useState(""); // Para pegar o valor de pagamento digitado
  const [validarCampo, setValidarCampo] = useState("none"); // Para validar campo de valor digitado

  // Função para abrir o modal de pagamento do usuário
  const modalPagar = (name) => {
    setAbrirPagamento("flex");
    setPegarUsuario(name);
  };

  // Função que abre o modal de recibo de pagamento
  const modalPagou = () => {
    if (valorDinheiro === "") {
      setValidarCampo("flex");
    } else {
      if (valorCartao === "1") {
        setAbrirNaoRecebeu("");
      } else {
        setAbrirNaoRecebeu("não");
      }
      setAbrirPagamento("none");
      setAbrirPagou("flex");
      setValorDinheiro("");
      setValidarCampo("none");
    }
  };

  // Função para fechar o modal do recibo de pagamento
  const fecharModal = () => {
    setAbrirPagou("none");
  };

  // Função para validar campo de valor para pagamento do usuário
  const valorInput = (event) => {
    const value = event.target.value.replace(/\D/g, "");
    const amount = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value / 100);
    setValorDinheiro(amount);
    setValidarCampo("none");
  };

  // Renderizando na tela as informações recebidas da API
  return (
    <section className="container">
      <label htmlFor="search">Buscar usuário</label>
      <input
        className="field"
        type="search"
        name=""
        id="search"
        onChange={filter}
        placeholder="Pesquise por: Nome, ID, Username"
      />
      <div className="row">
        {infos.map((item) => (
          <div className="card" key={item.index}>
            <div className="card-body">
              <img className="thumbnail" src={item.img} alt="Foto do usuário" />
              <div className="infos">
                <p className="title">{item.name}</p>
                <ul className="description">
                  <li>
                    <b>ID:</b> {item.id}
                  </li>
                  <li>
                    <b>Username:</b> {item.username}
                  </li>
                </ul>
              </div>
              <button
                className="modal-pay"
                onClick={() => {
                  modalPagar(item.name);
                }}
              >
                Pagar
              </button>
            </div>
          </div>
        ))}

        {/*--------------------------------Abrir Modal de pagamento----------------------------------*/}
        <div className="modal" style={{ display: abrirPagamento }}>
          <div className="modal-content">
            <p className="modal-header">
              Pagamento para <span>{pegarUsuario}</span>
            </p>
            <div className="modal-body">
              <input
                className="field"
                thousandSeparator={true}
                value={valorDinheiro}
                onChange={valorInput}
                placeholder="R$ 0,00"
              />
              <small className="field-error" style={{ display: validarCampo }}>
                Campo obrigatório
              </small>
              <select
                className="field"
                value={valorCartao}
                onChange={escolhaDoCartao}
              >
                <option value="1">
                  Cartão com final {cards[0].card_number.substr(-4)}
                </option>
                <option value="2">
                  Cartão com final {cards[1].card_number.substr(-4)}
                </option>
              </select>
            </div>
            <div className="modal-footer">
              <button
                onClick={() => {
                  modalPagou();
                }}
              >
                Pagar
              </button>
            </div>
          </div>
        </div>

        {/*------------------------------Abrir Modal de recibo de pagamento--------------------------------*/}
        <div className="modal" style={{ display: abrirPagou }}>
          <div className="modal-content">
            <div className="modal-header ">
              <p>Recibo de pagamento</p>
            </div>
            <div className="modal-body">
              <p>
                O Pagamento <b>{abrirNaoRecebeu}</b> foi concluído com sucesso
              </p>
            </div>
            <div className="modal-footer">
              <button
                onClick={() => {
                  fecharModal();
                }}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListaDeUsuarios;
