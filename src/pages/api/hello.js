export default function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({hello: req.body.name});
  }
}
