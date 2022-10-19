const schedule = require('node-schedule')

const tarefa = schedule.scheduleJob('/5 * * * * *', function() {
    console.log('Executando a tarefa 1!')
})

//'/5 * * * * *'

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 10
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa2!', new Date().getSeconds())
})