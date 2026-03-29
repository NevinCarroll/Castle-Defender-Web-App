package main

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	// Create a Gin router with default middleware (logger and recovery)
	r := gin.Default()
	r.LoadHTMLGlob("templates/*")   // Load templates into memory
	r.Static("/static", "./static") // Serve static files

	// Define routes
	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "menu.html", gin.H{})
	})

	r.GET("/tutorial", func(c *gin.Context) {
		c.HTML(http.StatusOK, "tutorial.html", gin.H{})
	})

	r.GET("/game", func(c *gin.Context) {
		c.HTML(http.StatusOK, "game.html", gin.H{})
	})

	r.GET("/game-over", func(c *gin.Context) {
		c.HTML(http.StatusOK, "game-over.html", gin.H{})
	})

	r.GET("/quit", func(c *gin.Context) {
		c.String(http.StatusOK, "Goodbye!")
	})

	// Start server on port 8080 (default)
	// Server will listen on 0.0.0.0:8080 (localhost:8080 on Windows)
	if err := r.Run(":8080"); err != nil {
		log.Fatalf("failed to run server: %v", err)
	}
}
