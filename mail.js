import sendMailCreateInstitution from './template/criarContaInstituicao.js';
import sendMailCreateVolunteer from './template/criarContaVoluntario.js';


const resultadoInst = await sendMailCreateInstitution('desafioprogdispmoveis@gmail.com', 'Instituicao teste');
const resultadoVolunt = await sendMailCreateVolunteer('desafioprogdispmoveis@gmail.com', 'Usuario teste');