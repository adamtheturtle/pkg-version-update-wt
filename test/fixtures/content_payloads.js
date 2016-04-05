import {readFileSync} from 'fs';

export const repo_1_pkg_file = {
  'name': 'package.json',
  'content': readFileSync(`${__dirname}/package_files/repo_1.json`).toString('base64'),
  'encoding': 'base64',
  'sha': 'somevalue'
};
export const repo_2_pkg_file = {
  'name': 'package.json',
  'content': readFileSync(`${__dirname}/package_files/repo_2.json`).toString('base64'),
  'encoding': 'base64',
  'sha': 'somevalue'
};
export const repo_3_pkg_file = {
  'name': 'package.json',
  'content': readFileSync(`${__dirname}/package_files/repo_3.json`).toString('base64'),
  'encoding': 'base64',
  'sha': 'somevalue'
};
