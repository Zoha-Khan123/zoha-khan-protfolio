'use client';

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

const MatterCanvas = () => {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial dimensions and handle window resizing
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      const { Engine, Render, World, Bodies, Mouse, MouseConstraint, Events, Runner } = Matter;

      // Create engine and renderer
      const engine = Engine.create();
      const render = Render.create({
        element: canvasRef.current,
        engine: engine,
        options: {
          width: dimensions.width,
          height: dimensions.height,
          background: 'transparent',
          wireframes: false,
        },
      });

      // Create runner and world
      const runner = Runner.create();
      const world = engine.world;

      // Add particles to the world
      const particles:any[] = [];
      for (let i = 0; i < 80; i++) {
        const particle = Bodies.circle(Math.random() * dimensions.width, Math.random() * dimensions.height, Math.random() * 55 + 5, {
          frictionAir: 0.15,
          render: {
            fillStyle: '#222',
          },
        });
        particles.push(particle);
      }
      World.add(world, particles);

      // Add mouse control
      const mouse = Mouse.create(render.canvas);
      const mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: {
          stiffness: 0.2,
          render: { visible: false },
        },
      });
      World.add(world, mouseConstraint);

      // Update particle movement with mouse position
      Events.on(engine, "afterUpdate", () => {
        const mousePosition = mouse.position;
        particles.forEach((particle) => {
          Matter.Body.applyForce(particle, particle.position, {
            x: (mousePosition.x - particle.position.x) * 0.00005,
            y: (mousePosition.y - particle.position.y) * 0.00005,
          });
        });
      });

      // Run the engine and render the scene
      Runner.run(runner, engine);
      Render.run(render);

      // Clean up on component unmount
      return () => {
        Render.stop(render);
        Runner.stop(runner);
        World.clear(world,true);
        Engine.clear(engine);
      };
    }
  }, [dimensions]);

  return (
    <div
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1, // Keep canvas in the background
        backgroundRepeat:"no-repeat",
        display:"flex",
      }}
    />
  );
};

export default MatterCanvas;
