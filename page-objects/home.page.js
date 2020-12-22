class HomePage {
  get $title() {
    return $("~Guru99");
  }

  get isTitleDisplayed() {
    return this.$title.isDisplayed();
  }

  get $courseCategory() {
    return $("//android.widget.TextView[@text='Course Category']");
  }

  get isCategoryDisplayed() {
    return this.$courseCategory.isDisplayed();
  }

  get isCategoryClickable() {
    this.$courseCategory.isClickable();
  }

  get isCategorySelected() {
    this.$courseCategory.isSelected();
  }

  get isCategoryActive() {
    return isCategoryDisplayed && isCategoryClickable && isCategorySelected;
  }

  get $courseList() {
    return $("//android.widget.TextView[@text='Course List']");
  }

  get isListDisplayed() {
    return this.$courseList.isDisplayed();
  }

  get isListClickable() {
    this.$courseList.isClickable();
  }

  get isListSelected() {
    this.$courseList.isSelected();
  }

  get isListNotActive() {
    return isListDisplayed && isListClickable && !isListSelected;
  }
}

module.exports = new HomePage();
