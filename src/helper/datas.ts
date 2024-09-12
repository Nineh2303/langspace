import {CourseType} from "./types.ts";

export const listCourse:string[] = [
  "Khóa mất gốc",
  "Khóa cơ bản",
  "Khóa nâng cao",

]

export const coursesData: CourseType[] =[
  {
    courseImg: "/src/assets/matgoc.jpg",
    courseName :"Khóa Mất Gốc: Xây Dựng Bước Đi Đầu Tiên",
    courseDescription: "Phát triển hay không nằm ở đây! Cơ cấu lại kiến thức cốt lõi, hình thành bản năng. Hiểu được bản chất học ngôn ngữ"
  },
  {
     courseImg: "/src/assets/canban.jpg",
    courseName :"Khóa Căn Bản: Bước Ngoặt hình thành phản xạ",
    courseDescription :"Xây dựng tư duy,  Self study. “Va chạm\" nhiều hơn với Nghe - Nói. Bổ sung kỹ năng mềm. Lúc này, bạn đã thấy Tiếng Anh thật sự dễ rồi đấy!"
  },
  {
    courseImg: "/src/assets/trungcap.jpg",
    courseName :"Khóa Trung Cấp: Giao Tiếp Như \"Tây\"  ",
    courseDescription :"Tiếp cận nhiều về kỹ năng mềm và giao thiệp. Kết thúc khoá, bạn có thể tự phát triển về từ vựng, mẫu câu, ngữ điệu"
  }
]