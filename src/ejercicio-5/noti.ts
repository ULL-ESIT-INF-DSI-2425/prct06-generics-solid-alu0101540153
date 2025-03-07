// Interfaz para definir un servicio de notificación
interface NotificationService {
    notify(message: string): void;
  }
  
  // Implementación de notificación por email
  class EmailService implements NotificationService {
    notify(message: string): void {
      console.log(`Sending notification by email: ${message}`);
    }
  }
  
  // Implementación de notificación por SMS
  class ShortMessageService implements NotificationService {
    notify(message: string): void {
      console.log(`Sending notification by SMS: ${message}`);
    }
  }
  
  // Ahora Notifier depende de una abstracción en lugar de implementaciones concretas
  class Notifier {
    constructor(private notificationService: NotificationService) {}
  
    sendNotification(message: string): void {
      this.notificationService.notify(message);
    }
  }
  
  // Client code (se mantiene igual, pero con mayor flexibilidad)
  const emailNotifier = new Notifier(new EmailService());
  emailNotifier.sendNotification('Hello World!');
  
  const smsNotifier = new Notifier(new ShortMessageService());
  smsNotifier.sendNotification('Hello World!');
  