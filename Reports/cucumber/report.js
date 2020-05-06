$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ChamadaGet.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    },
    {
      "line": 2,
      "value": "# encoding UTF-8"
    }
  ],
  "line": 5,
  "name": "Consulta API Teste",
  "description": "Eu como cliente da aplicacao\nQuero consultar informacoes via requisicao\nPara validar o retorno",
  "id": "consulta-api-teste",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 4,
      "name": "@validachamada"
    }
  ]
});
formatter.scenario({
  "line": 10,
  "name": "Consulta com validacao de resultado",
  "description": "",
  "id": "consulta-api-teste;consulta-com-validacao-de-resultado",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 11,
  "name": "envio a requisicao",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "Valido o retorno",
  "keyword": "Entao "
});
formatter.match({
  "location": "ValidaChamadaGetSteps.envio_a_requisicao()"
});
formatter.result({
  "duration": 16551617900,
  "status": "passed"
});
formatter.match({
  "location": "ValidaChamadaGetSteps.valido_o_retorno()"
});
formatter.result({
  "duration": 2486617300,
  "status": "passed"
});
});