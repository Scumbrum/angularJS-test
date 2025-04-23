export function errorDirective() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      scope.$watch(() => attrs.errorMessage, (isInvalid) => {
        if (isInvalid) {
          element.addClass('error-border');
          
          // Create and append error message element if it doesn't exist
          if (!element.next().hasClass('error-message')) {
            const errorElement = angular.element('<div class="error-message"></div>');
            errorElement.text(scope.errorMessage || 'This field has an error');
            element.after(errorElement);
          }
        } else {
          element.removeClass('error-border');
          
          // Remove error message if it exists
          const nextElement = element.next();
          if (nextElement.hasClass('error-message')) {
            nextElement.remove();
          }
        }
      });

      // Clean up on scope destruction
      scope.$on('$destroy', () => {
        element.removeClass('error-border');
        const nextElement = element.next();
        if (nextElement.hasClass('error-message')) {
          nextElement.remove();
        }
      });
    }
  };
} 