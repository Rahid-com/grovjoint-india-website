import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      company,
      email,
      phone,
      country,
      state,
      city,
      productFamily,
      modelNumber,
      quantity,
      requirements,
    } = body;

    // Validate required fields
    if (
      !name ||
      !company ||
      !email ||
      !phone ||
      !country ||
      !productFamily ||
      !modelNumber ||
      !quantity
    ) {
      return NextResponse.json(
        { success: false, message: "Please fill all required fields." },
        { status: 400 }
      );
    }

    // Generate enquiry reference
    const reference = `GJI-${Date.now()}`;

    // Save enquiry to PostgreSQL
    const enquiry = await prisma.rfq.create({
      data: {
        id: crypto.randomUUID(),
        reference,
        name,
        company,
        email,
        phone,
        country,
        state: state || null,
        city: city || null,
        items: [
          {
            productFamily,
            modelNumber,
            quantity: Number(quantity),
            requirements: requirements || "",
          },
        ],
        uploadedFiles: [],
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been submitted successfully!",
        reference: enquiry.reference,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("RFQ submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}