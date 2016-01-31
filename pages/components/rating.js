export class DemoRating {
  val1: number;
  val2: number = 5;
  val3: number;
  val4: number = 5;
  msg: string;

  handleRate(event) {
    this.msg = "You have rated " + event.value;
  }

  handleCancel(event) {
    this.msg = "Rating Cancelled";
  }

}
