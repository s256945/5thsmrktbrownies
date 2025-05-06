export default function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }
  
    const { password } = req.body;
    // eslint-disable-next-line no-undef
    const CORRECT_PASSWORD = process.env.PARENTS_AREA_PASSWORD;
  
    if (password === CORRECT_PASSWORD) {
      return res.status(200).json({ valid: true });
    } else {
      return res.status(401).json({ valid: false });
    }
  }