import { BlogCard, SectionHeader } from '@/components/ui'
import React from 'react'
import { Tabs } from '@/components/ui'

const NewCourses = () => {
  return (
    <section className="courses">
      <div className="wrapper">
        <Tabs
          tabs={[
            { label: 'Python', isActive: true },
            { label: 'Node', isActive: false },
            { label: 'Java', isActive: false },
            { label: 'C#', isActive: false },
            { label: 'React', isActive: false },
            { label: 'Angular', isActive: false },
            { label: 'Vue', isActive: false },
            { label: 'Figma', isActive: false },
            { label: 'Docker', isActive: false }
          ]}
        />
        <div className="courses__row">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
      <style jsx>{`
        .courses {
        }

        .courses__row {
          padding-top: 1.6rem;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-column-gap: 3rem;
        }
      `}</style>
    </section>
  )
}

export default NewCourses
