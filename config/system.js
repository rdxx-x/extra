const si = require('systeminformation')

exports.cpu = async () => (await si.cpu()).brand

exports.nucleos = async () => (await si.cpu()).cores

exports.velocidad = async () => (await si.cpu()).speed

exports.ram = async () => (await si.mem()).total

exports.usada = async () => (await si.mem()).active

exports.libre = async () => (await si.mem()).available
