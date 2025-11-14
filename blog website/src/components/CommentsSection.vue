<template>
  <section class="relative min-h-screen flex items-center overflow-hidden px-6 py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 opacity-40">
      <div class="absolute top-20 left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
      <div class="absolute bottom-40 right-20 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-float-delayed"></div>
    </div>

    <!-- Decorative Grid Pattern -->
    <div class="absolute inset-0 opacity-5" style="background-image: linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px); background-size: 50px 50px;"></div>

    <div class="max-w-4xl mx-auto relative z-10 w-full">
      <!-- Title Section -->
      <div class="text-center mb-16">
        <div class="inline-block mb-6">
          <span class="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-bold rounded-full shadow-lg">
            COMMUNITY FEEDBACK
          </span>
        </div>
        <h2 class="text-6xl font-black text-gray-900 mb-4 tracking-tight">
          Share Your <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Experience</span>
        </h2>
        <div class="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-6"></div>
        <p class="text-gray-600 text-lg">
          Your feedback helps us improve. Comment anonymously - no login required.
        </p>
      </div>

      <!-- Comment Form -->
      <div class="relative mb-12">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-10"></div>
        <div class="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
          
          <!-- Rating Section -->
          <div class="mb-6">
            <label class="block text-gray-700 font-bold mb-3">Rate your experience</label>
            <div class="flex gap-2">
              <button
                v-for="star in 5"
                :key="star"
                @click="newComment.rating = star"
                type="button"
                class="transition-all duration-200 transform hover:scale-110"
              >
                <svg 
                  class="w-10 h-10" 
                  :class="star <= newComment.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
              </button>
            </div>
            <p class="text-sm text-gray-500 mt-2">
              {{ newComment.rating ? `${newComment.rating} star${newComment.rating > 1 ? 's' : ''}` : 'Click to rate' }}
            </p>
          </div>

          <!-- Message Textarea -->
          <textarea
            v-model="newComment.message"
            placeholder="Share your thoughts, feedback, or suggestions..."
            rows="4"
            class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none mb-4"
            maxlength="500"
          ></textarea>

          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">
              {{ newComment.message.length }}/500 characters
            </span>
            <button
              @click="submitComment"
              :disabled="!newComment.message.trim() || !newComment.rating || isSubmitting"
              class="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <span v-if="!isSubmitting">Post Comment</span>
              <span v-else>Posting...</span>
            </button>
          </div>

          <!-- Success Message -->
          <div v-if="showSuccess" class="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="text-green-700 font-medium">Comment posted successfully!</span>
          </div>

          <!-- Error Message -->
          <div v-if="errorMessage" class="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
            <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="text-red-700 font-medium">{{ errorMessage }}</span>
          </div>
        </div>
      </div>

      <!-- Average Rating Display -->
      <div v-if="comments.length > 0" class="mb-8">
        <div class="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 shadow-2xl text-white text-center">
          <div class="flex items-center justify-center gap-4 mb-4">
            <div class="text-6xl font-black">{{ averageRating.toFixed(1) }}</div>
            <div class="flex">
              <svg 
                v-for="star in 5" 
                :key="star"
                class="w-8 h-8"
                :class="star <= Math.round(averageRating) ? 'text-yellow-300 fill-current' : 'text-white/30'"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                ></path>
              </svg>
            </div>
          </div>
          <p class="text-blue-100 text-lg">Based on {{ comments.length }} review{{ comments.length !== 1 ? 's' : '' }}</p>
        </div>
      </div>

      <!-- Comments List -->
      <div class="space-y-6">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-2xl font-bold text-gray-900">
            Comments <span class="text-blue-600">({{ comments.length }})</span>
          </h3>
        </div>

        <!-- Loading State -->
        <div v-if="isLoading" class="text-center py-12">
          <div class="inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p class="text-gray-600 mt-4">Loading comments...</p>
        </div>

        <!-- Empty State -->
        <div v-else-if="comments.length === 0" class="text-center py-12 bg-white rounded-3xl shadow-lg border border-gray-100">
          <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
          <p class="text-gray-600 text-lg font-medium">No comments yet</p>
          <p class="text-gray-500 text-sm mt-2">Be the first to share your thoughts!</p>
        </div>

        <!-- Comment Cards -->
        <div
          v-for="comment in comments"
          :key="comment.id"
          class="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-md">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <div class="flex-1">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-3">
                  <h4 class="font-bold text-gray-900">Anonymous</h4>
                  <div class="flex">
                    <svg 
                      v-for="star in 5" 
                      :key="star"
                      class="w-5 h-5"
                      :class="star <= comment.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span class="text-sm text-gray-500">
                  {{ formatDate(comment.createdAt) }}
                </span>
              </div>
              <p class="text-gray-700 leading-relaxed">
                {{ comment.message }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';

export default {
  name: 'CommentsSection',
  data() {
    return {
      newComment: {
        rating: 0,
        message: ''
      },
      comments: [],
      isSubmitting: false,
      isLoading: true,
      showSuccess: false,
      errorMessage: ''
    };
  },
  computed: {
    averageRating() {
      if (this.comments.length === 0) return 0;
      const sum = this.comments.reduce((acc, comment) => acc + (comment.rating || 0), 0);
      return sum / this.comments.length;
    }
  },
  mounted() {
    this.loadComments();
  },
  methods: {
    loadComments() {
      try {
        const commentsRef = collection(db, 'comments');
        const q = query(commentsRef, orderBy('createdAt', 'desc'));
        
        // Real-time listener
        onSnapshot(q, (snapshot) => {
          this.comments = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          this.isLoading = false;
        }, (error) => {
          console.error('Error loading comments:', error);
          this.errorMessage = 'Failed to load comments. Please refresh the page.';
          this.isLoading = false;
        });
      } catch (error) {
        console.error('Error loading comments:', error);
        this.errorMessage = 'Failed to load comments. Please refresh the page.';
        this.isLoading = false;
      }
    },
    
    async submitComment() {
      if (!this.newComment.message.trim() || !this.newComment.rating) return;
      
      this.isSubmitting = true;
      this.errorMessage = '';
      
      try {
        const commentsRef = collection(db, 'comments');
        await addDoc(commentsRef, {
          rating: this.newComment.rating,
          message: this.newComment.message.trim(),
          createdAt: serverTimestamp()
        });
        
        // Clear form
        this.newComment.rating = 0;
        this.newComment.message = '';
        
        // Show success message
        this.showSuccess = true;
        setTimeout(() => {
          this.showSuccess = false;
        }, 3000);
        
      } catch (error) {
        console.error('Error posting comment:', error);
        this.errorMessage = 'Failed to post comment. Please try again.';
      } finally {
        this.isSubmitting = false;
      }
    },
    
    formatDate(timestamp) {
      if (!timestamp) return 'Just now';
      
      const date = timestamp.toDate();
      const now = new Date();
      const diffInSeconds = Math.floor((now - date) / 1000);
      
      if (diffInSeconds < 60) return 'Just now';
      if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
      if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
      if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;
      
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined 
      });
    }
  }
};
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(10px);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-30px) translateX(-10px);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 10s ease-in-out infinite;
  animation-delay: 1s;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>