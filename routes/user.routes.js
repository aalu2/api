import express from "express"

// Placeholder middleware
const isAuthenticate = (req, res, next) => {
  const token = req.headers["authorization"]
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" })
  }
  next()
}

// Placeholder controller function
const getUserForSidebar = (req, res) => {
  res.status(200).json({ users: [{ username: "John" }, { username: "Jane" }] })
}

const getUserById = (req, res) => {
  res.status(200).json({ user: { username: "John", email: "john@example.com" } })
}

const router = express.Router()

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get users for the sidebar
 *     description: Retrieves users to be displayed in the sidebar, requires authentication
 *     responses:
 *       200:
 *         description: A list of users for the sidebar
 *       401:
 *         description: Unauthorized, token required
 */
router.get("/", isAuthenticate, getUserForSidebar)

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get detailed information of a user
 *     description: Retrieves detailed information about a specific user by their ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the user to fetch details for
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detailed user information
 *       401:
 *         description: Unauthorized, token required
 */
router.get("/:id", isAuthenticate, getUserById)

export default router
