const pool = require("./../config/db");

exports.getChats = async (req, res) => {
    // console.log("inside chat controller");
    try {
        const chatsResult = await pool.query("SELECT * FROM chats WHERE user_id = 2");
        const messagesResult = await pool.query("SELECT * FROM messages");

        // Access the rows directly
        const chats = chatsResult.rows; // Access the rows
        const messages = messagesResult.rows; // Access the rows

        // Log the rows to verify the output
        // console.log("Chats:", chats);
        // console.log("Messages:", messages);

        res.status(200).json({ chats, messages }); // Return the chats and messages
    } catch (err) {
        console.log("Server Error (chat controller):", err);
        res.status(500).json({ error: "Server Error (chat controller)" });
    }
};

exports.addMessage = async (req, res) => {
    console.log("inside addMessage controller");


    try {
        const {text,chat_id} = req.body;

        // console.log(message);

        // const chatsResult = await pool.query(`INSERT INTO public.messages(  chat_id, text, sender, "time") VALUES ($1, $2, $3, $4) RETURNING *`,
        //     []
        // );


        // Log the rows to verify the output
        // console.log("Chats:", chats);
        // console.log("Messages:", messages);

        // res.status(200).json({ chats, messages }); // Return the chats and messages
    } catch (err) {
        console.log("Server Error (chat controller):", err);
        res.status(500).json({ error: "Server Error (chat controller)" });
    }
};

