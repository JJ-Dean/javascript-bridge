/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #count;

  constructor(count) {
    this.#count = count;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(answerArr, inputLetter) {
    this.answerArr = answerArr;
    return this.isMoveCorrect(inputLetter);
  }

  isMoveCorrect(inputLetter) {
    if (inputLetter === this.answerArr[this.#count]) {
      return this.moveisTrue();
    }
    if (inputLetter !== this.answerArr[this.#count]) {
      return this.moveisFalse();
    }
  }

  moveisTrue() {
    this.#count++;
    return true;
  }

  moveisFalse() {
    this.#count++;
    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#count = 0;
  }
}

module.exports = BridgeGame;
