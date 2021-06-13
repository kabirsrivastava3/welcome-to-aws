import { Component, OnInit } from "@angular/core";

declare interface Article {
  image: string;
  title: string;
  describe: string;
  link: string;
}


@Component({
  selector: "app-my-articles",
  templateUrl: "./my-articles.component.html",
  styleUrls: ["./my-articles.component.scss"],
})
export class MyArticlesComponent implements OnInit {
  public allArticles: Article[] = [
    {
      image: "1.png",
      title: "Palo Alto Networks",
      describe: "The integration of the VM-Series Virtual Next-Generation Firewall with the new Amazon VPC Ingress Routing feature makes it much easier for customers to ensure that all ingress traffic to their VPC is filtered through our threat prevention services.",
      link: "https://aws.amazon.com/vpc/?nc2=h_ql_prod_fs_vpc"
    },
    {
      image: "2.png",
      title: "Fortinet",
      describe: "Amazon VPC Ingress routing allows Fortinet to offer more confidence to customers by enabling Fortinet network security on any traffic entering their business critical VPC’s. VPC Ingress Routing also allows for much more flexible solutions that help secure different workloads with separate Fortinet Products in a single VPC.",
      link: "https://aws.amazon.com/vpc/?nc2=h_ql_prod_fs_vpc"
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
