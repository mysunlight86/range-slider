/* eslint-disable class-methods-use-this */
class Car {
  public go(msg: string): string {
    // eslint-disable-next-line no-console
    console.log(msg);
    return msg;
  }

  bindEventListeners() {
    document.addEventListener('click', this.handleStopButtonClick);
  }

  handleStopButtonClick() {
    // eslint-disable-next-line no-alert
    alert('Спасибо!');
  }
}

export default Car;
