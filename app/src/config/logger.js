
const {createLogger,transports,format} = require("winston");
const {combine,timestamp,label,printf,simple,colorize} = format;

const printFormat = printf(({timestamp,label,level,message}) => {
    return `${timestamp} [${label}] ${level} : ${message}`;
});

const printLogGormat = {
    file:combine(
    label({
        label: "백엔드 맛보기",
    }),
    // colorize() ,
    timestamp({
        format:"YYYY-MM-DD hh:mm:dd",
    }),
    printFormat,
    ),
    console: combine(
        colorize(),
        simple(),
    )
}

const opts = {
    file: new transports.File({
        filename: "access.log",
        dirname: "./logs",     
        level: "info",
        format: printLogGormat.file,
    }), 
    console: new transports.Console({ 
        level: "info",
        format: printLogGormat.console,
    }),
}    

const logger = createLogger({
    transports: [opts.file],
});

if(process.env.NODE_ENV !== "production") {
    logger.add(opts.console);
}
module.exports = logger;