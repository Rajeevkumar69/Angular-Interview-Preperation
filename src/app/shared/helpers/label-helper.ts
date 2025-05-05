export class LabelHelper {
     public beautifyLabel(label: string): string {
          let beautifyLabel = label
               .replace(/_/g, ' ')
               .replace(/([a-z])([A-Z])/g, '$1 $2')
               .trim();

          const replacements: { [key: string]: string } = {
               'Billing Address GST': 'GST Number',
               'Organization Web Url': 'Organization Web URL',
          };

          Object.keys(replacements).forEach((key) => {
               beautifyLabel = beautifyLabel.replace(
                    new RegExp(`\\b${key}\\b`, 'gi'),
                    replacements[key]
               );
          });

          return this.capitalizeWords(beautifyLabel);
     }

     private capitalizeWords(label: string): string {
          return label.replace(/\b\w/g, (char) => char.toUpperCase());
     }
}
