import getFile from "../index.js";

const arrayResult = [
  {
    FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList",
  },
];

describe("getFile::", () => {
  it("deve ser uma função", () => {
    expect(typeof getFile).toBe("function");
  });
  it("deve retornar array com resultados", async () => {
    const path = String.raw`C:\Users\Luciano\Desktop\Backups\ti\curso-NodeJS-sua-biblioteca\test\files\text.md`;
    const res = await getFile(path);
    expect(res).toEqual(arrayResult);
  });
  it('deve retornar mensagem "não há links"', async () => {
    const path = String.raw`C:\Users\Luciano\Desktop\Backups\ti\curso-NodeJS-sua-biblioteca\test\files\text-noLinks.md`;
    const res = await getFile(path);
    expect(res).toBe("não há links");
  });
});
