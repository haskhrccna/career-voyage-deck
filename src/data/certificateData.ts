interface Certificate {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
}

export const pmpCertification: Certificate = {
  id: 2,
  title: "Project Management Professional (PMP)",
  date: "June 2023",
  imageUrl: "https://images.credly.com/size/680x680/images/260e36dc-d100-45c3-852f-6d2a8c4032c8/pmp-600px.png"
};

export const otherCertifications: Certificate[] = [
  {
    id: 1,
    title: "HashiCorp Certified: Terraform Associate (003)",
    date: "Nov 2023",
    imageUrl: "https://images.credly.com/size/680x680/images/85b9cfc4-257a-4742-878c-4f7ab4a2631b/image.png"
  },
  {
    id: 3,
    title: "Microsoft Azure Fundamentals",
    date: "May 2022",
    imageUrl: "https://images.credly.com/size/680x680/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png"
  },
  {
    id: 4,
    title: "AWS Certified Developer Associate",
    date: "April 2022",
    imageUrl: "https://images.credly.com/size/680x680/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png"
  },
  {
    id: 5,
    title: "Cisco Certified DevNet Associate",
    date: "Jan 2022",
    imageUrl: "https://images.credly.com/size/680x680/images/31736ead-c5b8-4c4e-894d-5e55d5664ac3/image.png"
  },
  {
    id: 6,
    title: "AWS Certified Solutions Architect – Associate",
    date: "Nov 2021",
    imageUrl: "https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
  },
  {
    id: 7,
    title: "PCAP – Certified Associate in Python Programming",
    date: "Sep 2021",
    imageUrl: "https://images.credly.com/size/680x680/images/587b02d4-41d5-4a81-9b9d-b5076200713c/pcap-31-xx.png"
  },
  {
    id: 8,
    title: "MCSE (Microsoft Certified Systems Engineer)",
    date: "2001",
    imageUrl: "https://images.credly.com/size/680x680/images/63482325-a0d6-4f64-ae75-f5f33922c7d0/MicrosoftCertified_Generic.png"
  }
];