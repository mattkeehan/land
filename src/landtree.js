#!/usr/bin/env node

const companies = require("../data/company-relations.json");
const landParcels = require("../data/land-ownership.json");

const getLandParcels = (companyId) =>
  landParcels.filter((parcel) => parcel.companyId === companyId).length;

const getParent = (company, trace) => {
  const parent = companies.find((c) => c.id === company.parentId);
  trace.push(parent.id);
  if (parent && parent.parentId) return getParent(parent, trace);

  console.log(
    `${parent.id}; ${parent.name}; owner of ${getLandParcels(
      parent.id
    )} land parcels`
  );
  trace.pop();
  displayChildren(parent, 1, trace);
};

const displayChildren = (company, depth, trace) => {
  const indent = "| ".repeat(depth);
  const children = companies.filter((c) => c.parentId === company.id);
  children.forEach((child) => {
    console.log(
      `${indent}- ${child.id}; ${child.name}; owner of ${getLandParcels(
        child.id
      )} land parcels`
    );
    if (trace[trace.length - 1] === child.id) {
      trace.pop();
      return displayChildren(child, depth + 1, trace);
    }
  });
};

module.exports = (companyId) => {
  const company = companies.find((c) => c.id === companyId);

  if (!company) {
    throw "Company not found";
  }

  getParent(company, [company.id]);
}