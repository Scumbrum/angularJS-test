export function errorDirective() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      scope.$watch(() => attrs.errorMessage, (error) => {
        if (error) {
          element.addClass('error--border');

          if (!element.next().hasClass('error')) {
            const errorElement = angular.element('<div class="error"></div>');
            errorElement.text(error || 'This field has an error');
            element.after(errorElement);
          } else {
            element.next().text(error || 'This field has an error');
          }
        } else {
          element.removeClass('error--border');
 
          const nextElement = element.next();
          if (nextElement.hasClass('error')) {
            nextElement.remove();
          }
        }
      });

      scope.$on('$destroy', () => {
        element.removeClass('error--border');
        const nextElement = element.next();
        if (nextElement.hasClass('error')) {
          nextElement.remove();
        }
      });
    }
  };
} 