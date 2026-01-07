import React from "react"
import Layout from "../components/layout"

const skills = [
  { category: "Frontend", items: ["React", "React Native", "Next.js", "Vue.js", "TypeScript"] },
  { category: "Backend", items: ["Node.js", "GraphQL"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB"] },
  { category: "Cloud", items: ["AWS"] },
]

const SkillsPage = () => {
  return (
    <Layout>
      <div className="mt-24 md:mt-32 px-4 md:px-12 lg:px-44">
        <h1 className="text-gray-200 text-3xl lg:text-4xl font-light mb-8">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map(skill => (
            <div key={skill.category} className="mb-6">
              <h2 className="text-pink-light text-xl font-medium mb-4">{skill.category}</h2>
              <div className="flex flex-wrap gap-3">
                {skill.items.map(item => (
                  <span
                    key={item}
                    className="bg-gray-700 text-gray-100 px-4 py-2 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default SkillsPage
