import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title."],
    minLength: [3, "Title must contain at least 3 Characters!"],
    maxLength: [30, "Title cannot exceed 30 Characters!"],
  },
  description: {
    type: String,
    required: [true, "Description."],
    minLength: [30, "At least 30 Characters!"],
    maxLength: [200, "Description cannot exceed 200 Characters!"],
  },
  category: {
    type: String,
    required: [true, "Please provide a category."],
  },
  country: {
    type: String,
    required: [true, "Please provide a country name."],
  },
  city: {
    type: String,
    required: [true, "Please provide a city name."],
  },
  location: {
    type: String,
    required: [true, "Please provide location."],
    minLength: [10, "At least 10 characters!"],
  },
  fixedSalary: {
    type: Number,
    minLength: [4, "4 digits"],
    maxLength: [9, "Salary cannot exceed 9 digits"],
  },
  salaryFrom: {
    type: Number,
    minLength: [4, "4 digits"],
    maxLength: [9, "Salary cannot exceed 9 digits"],
  },
  salaryTo: {
    type: Number,
    minLength: [4, "4 digits"],
    maxLength: [9, "Salary cannot exceed 9 digits"],
  },
  expired: {
    type: Boolean,
    default: false,
  },
  jobPostedOn: {
    type: Date,
    default: Date.now,
  },
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Job = mongoose.model("Job", jobSchema);