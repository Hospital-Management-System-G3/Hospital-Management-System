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
        const { message } = req.body;

        console.log(message.text);
        console.log(message.chatId);

        const currentTime = new Date();
        const timeString = currentTime.toTimeString().split(' ')[0];

        const chatsResult = await pool.query(`INSERT INTO public.messages(  chat_id, text, sender, "time") VALUES ($1, $2, $3, $4) RETURNING *`,
            [message.chatId, message.text, "User", timeString]
        );

        const updateLastMessage = await pool.query(`UPDATE chats SET last_message='${message.text}' , time_last_message='${timeString}' WHERE chat_id=${message.chatId} `,);


        // Log the rows to verify the output
        // console.log("Chats:", chats);
        // console.log("Messages:", messages);

        // res.status(200).json({ chats, messages }); // Return the chats and messages
    } catch (err) {
        console.log("Server Error (chat controller):", err);
        res.status(500).json({ error: "Server Error (chat controller)" });
    }
};

