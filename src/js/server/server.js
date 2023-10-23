import restana from "restana";

export async function start() {
    
    let app = restana();

    app.get('/hi', (req, res) => {
        res.send('Hello World!');
    });

    app.start(9001);
    console.log(`- server has started...and it's over 9000!!!`);
}