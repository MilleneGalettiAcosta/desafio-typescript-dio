// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

// resposta 1
interface Iemployee {
  code: number,
  name: string,
}

let employee: Iemployee = {
  code: 10,
  name: "John",
};

// resposta 2
let employee2: { code: number, name: string } = {
  code: 10,
  name: "John",
}

