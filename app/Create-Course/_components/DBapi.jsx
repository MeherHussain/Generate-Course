// filepath: /d:/Finale Project/ai-course-generator/pages/api/save-course.js
import { db } from "@/Configs/Postgress";
import { CourseList } from "@/Configs/Schema";
import uuid4 from "uuid4";
import { getSession } from "@clerk/nextjs/server";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const session = await getSession(req);
    const user = session.user;

    const { userCourseInput, courseLayout } = req.body;
    const id = uuid4();

    try {
      await db.insert(CourseList).values({
        courseId: id,
        name: userCourseInput?.topic,
        level: userCourseInput?.Level,
        category: userCourseInput?.category,
        courseOutput: courseLayout,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
        userProfileImage: user?.imageUrl,
      });

      res.status(200).json({ message: "Course saved successfully" });
    } catch (error) {
      console.error("Error saving course layout:", error);
      res.status(500).json({ error: "Error saving course layout" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
