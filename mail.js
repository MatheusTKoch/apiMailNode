import sendMailCreateInstitution from './template/mailContaInstituicao.js';
import sendMailCreateVolunteer from './template/mailContaVoluntario.js';
import sendMailCandidate from './template/mailVoluntarioVaga.js';
import sendMailInstitution from './template/maiInstituicaoVaga.js';


const resultadoInst = await sendMailCreateInstitution('desafioprogdispmoveis@gmail.com', 'Instituicao teste');
const resultadoVolunt = await sendMailCreateVolunteer('desafioprogdispmoveis@gmail.com', 'Usuario teste');
const resultadoMailInst = await sendMailInstitution('desafioprogdispmoveis@gmail.com', 'Voluntario teste', 'Servico de pintura', 'Instituicao ORG Teste');
const resultadoMailVolunt = await sendMailCandidate('desafioprogdispmoveis@gmail.com', 'Voluntario teste', 'Servico de pintura', 'Instituicao ORG Teste');