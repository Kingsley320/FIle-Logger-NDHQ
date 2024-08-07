import Feed from "@components/Feed"

const page = () => {
  return (
    <section className="w-full flex-center flex-col" >

    <h1 className="head_text text-center">Track & Store {" "}
    <br className="md:hidden"/>
    <span className="green_gradient text-center">
      All File Movement
    </span>
    </h1>
    <p className="desc text-center">
      Digister is an internal software made by NYSC to monitor the movements of files to promote proper documentation in the department.
    </p>

    <Feed/>
    </section>
  )
}

export default page