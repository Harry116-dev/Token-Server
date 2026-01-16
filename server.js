import express from 'express';
import { createCipheriv } from 'crypto';
import { generateToken04 } from './token.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
// const appId = 1042883316;
// const ZEGO_SECRET = "35aaa1b6438edd7e612afd34af9e77f5";

const appId = 449016883;
const ZEGO_SECRET = "56c44010f2a514fbafa32763c874bde3";
/* ================== TOKEN UTILS ================== */

app.get('/api/:roomId/:userId', (req, res) => {
  try {
    const { roomId, userId } = req.params;

    const token = generateToken04(
      appId,
      userId,
      ZEGO_SECRET,
      3600
    );

    res.json({token: token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* ================== SERVER ================== */

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Token server running on port ${PORT}`);
});
