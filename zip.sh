#!/bin/bash
alumne=rbuj
pac=pac2
fitxer="${pac}_${alumne}.zip"

if [ -f ${fitxer} ]; then
  rm -f ${fitxer}
fi

zip ${fitxer} -r .eslintrc.json .gitignore .vscode \
  LICENSE README.md README_ca.md README_es.md \
  package.json src public
