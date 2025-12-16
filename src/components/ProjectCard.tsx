import React from "react"
import LiquidGlass from "./liquid-glass"
import type { Project } from "../types/project"

type ProjectCardProps = {
    project: Project
}

const chipStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "6px 14px",
    borderRadius: 999,
    border: "1px solid rgba(0, 0, 0, 0.1)",
    fontSize: 12,
    color: "#475467",
    background: "rgba(255, 255, 255, 0.5)",
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <LiquidGlass
            layout="inline"
            overLight
            cornerRadius={24}
            padding="0"
            style={{ width: "100%", height: "100%" }}
        >
            <article style={{ display: "flex", flexDirection: "column", width: "100%", overflow: "hidden" }}>
                {project.image && (
                    <div style={{ width: "100%", overflow: "hidden" }}>
                        <img
                            src={project.image}
                            alt={project.title}
                            style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
                            loading="lazy"
                        />
                    </div>
                )}
                <div style={{ padding: "20px", display: "grid", gap: 12 }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                            <h3 style={{ margin: 0, color: "#0f1d2d", fontSize: "clamp(18px, 3vw, 22px)", fontWeight: 600 }}>{project.title}</h3>
                            {project.year && (
                                <span style={{ color: "#6b7280", fontSize: 12, marginLeft: "auto" }}>{project.year}</span>
                            )}
                        </div>
                        {project.period && <p style={{ margin: 0, color: "#475467", fontSize: 13 }}>{project.period}</p>}
                    </div>
                    <p style={{ margin: 0, color: "#475467", lineHeight: 1.5, fontSize: 14 }}>{project.description}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                        {project.tags.map((tag) => (
                            <span key={`${project.id}-${tag}`} style={chipStyle}>
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 4 }}>
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#ff7038", fontSize: 14, textDecoration: "none", fontWeight: 500 }}
                            >
                                View live →
                            </a>
                        )}
                        {project.repoUrl && (
                            <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#ff7038", fontSize: 14, textDecoration: "none", fontWeight: 500 }}
                            >
                                Case study
                            </a>
                        )}
                    </div>
                </div>
            </article>
        </LiquidGlass>
    )
}

export default ProjectCard
