# Step 3: Services Builder

This folder contains the implementation of Step 3 (Services Builder) for the Professional SignUp flow.

## Structure

```
Step3ServicesBuilder/
├── index.jsx                    # Main Step 3 component with sub-step navigation
├── SubStep1ServiceBuilder.jsx   # First sub-step: Service configuration
└── README.md                    # This documentation
```

## Components

### index.jsx
- Main container for Step 3
- Handles sub-step navigation using `useSubStepNavigation` hook
- Renders `SubStepIndicator` with Step 3 specific configuration
- Routes to appropriate sub-step components

### SubStep1ServiceBuilder.jsx
- Service creation and management interface
- Form for adding new services with validation
- Service list display with edit/delete functionality
- Responsive design matching other steps

## Features

### Service Management
- **Add Services**: Form to create new services with:
  - Service Name (required)
  - Category selection (required)
  - Duration in minutes (required)
  - Price in USD (required)
  - Description (optional)
  - Availability status

- **Service Display**: Grid layout showing:
  - Service cards with hover effects
  - Service details (category, duration, price)
  - Status indicators
  - Remove functionality

### Validation
- Required field validation
- Form submission only when valid
- Continue button disabled until at least one service is added

### Responsive Design
- Mobile-first approach
- Grid layout adapts to screen size
- Touch-friendly interface on mobile devices
- Consistent with other steps' responsive behavior

## Styling

All styles are defined in `ProfessionalSignUp.css` under the "Service Builder Styles" section:

- `.service-builder-container`: Main container
- `.add-service-section`: Form section styling
- `.services-grid`: Responsive grid layout
- `.service-card`: Individual service card styling
- `.btn-add-service`: Add service button
- `.btn-remove-service`: Remove service button

## Usage

The component is automatically integrated into the main ProfessionalSignUp flow:

1. User navigates to Step 3
2. SubStepIndicator shows "Service Builder" as the current sub-step
3. User can add multiple services using the form
4. Services are displayed in a responsive grid
5. User can remove services as needed
6. Continue button becomes enabled once at least one service is added

## Data Structure

Services are stored in the following format:

```javascript
{
  id: timestamp,
  serviceName: string,
  serviceDescription: string,
  duration: number,
  price: number,
  category: string,
  availability: 'available' | 'limited' | 'unavailable'
}
```

## Future Enhancements

The structure is prepared for additional sub-steps:

1. **SubStep2ServiceScheduling**: Configure service-specific scheduling rules
2. **SubStep3ServicePricing**: Advanced pricing options (packages, discounts)
3. **SubStep4ServiceResources**: Assign staff and resources to services

To add new sub-steps:

1. Create new component file (e.g., `SubStep2ServiceScheduling.jsx`)
2. Add to `step3SubSteps` array in `index.jsx`
3. Add case in `renderCurrentSubStep()` switch statement
4. Update navigation logic in `handleSubStepNext()`

## Integration

The component integrates with:

- `useSubStepNavigation` hook for navigation
- `SubStepIndicator` component for breadcrumbs
- Main form data management system
- Existing CSS framework and design system