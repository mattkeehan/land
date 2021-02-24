const fs = require("fs");
const companies = [];
fs.readFileSync("./company_relations.csv", "utf8")
  .split("\n")
  .slice(1) // header row
  .forEach((line) => {
    const [id, name, parentId] = line.split(",");
    companies.push({
      id, name, parentId
    });
  });
fs.writeFile('./company-relations.json', JSON.stringify(companies), () => console.log('completed companies'));
  
const land = [];
fs.readFileSync("./land_ownership.csv", "utf8")
  .split("\n")
  .slice(1) // header row
  .forEach((line) => {
    const [landId, companyId] = line.split(",");
    land.push({
      landId, companyId
    });
  });
fs.writeFile('./land-ownership.json', JSON.stringify(land), () => console.log('completed land'));  