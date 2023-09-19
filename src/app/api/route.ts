import { NextRequest, NextResponse } from "next/server";
// import connectMongoDb from "@/lib/mongodb";
// import UserSchema from "@/models/UserSchema";

export async function POST(request: NextRequest) {
  try {
    const { userId, title, description, gradeId, sectionId, pdfLink } =
      await request.json();

    // await connectMongoDb();

    // if (!adminUser) {
    //   return new NextResponse("User not found", { status: 403 });
    // }

    //   return NextResponse.json(
    //     {  data },
    //     { status: 201 }
    //   );
  } catch (error) {
    // return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  //   const id = request.nextUrl.searchParams.get("id");

  //   if (!ID) {
  //     return NextResponse.json(
  //       { error: "ID parameter is missing" },
  //       { status: 400 }
  //     );
  //   }

  try {
    // Connect to MongoDB
    // await connectMongoDb();
    // const data: DATA[] = await DATAModel.find({
    //   sectionId: { $in: JSON.parse(ID) },
    // });
    // if (data.length > 0) {
    //   return NextResponse.json({ data }, { status: 200 });
    // } else {
    //   return NextResponse.json(
    //     { error: "No DATAs found" },
    //     { status: 404 }
    //   );
    // }
  } catch (error) {
    // return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
